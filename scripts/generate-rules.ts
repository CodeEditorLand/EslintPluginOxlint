import { writeFileSync } from "fs";
import path from "path";
import axios from "axios";
import { getLatestOxlintVersion } from "./oxlint-version.js";

const __dirname = new URL(".", import.meta.url).pathname;

const oxlintVersion = await getLatestOxlintVersion();

console.log("Generating rules for " + oxlintVersion);

const oxlintRulesUrl = `https://raw.githubusercontent.com/oxc-project/oxc/${oxlintVersion}/crates/oxc_linter/src/rules.rs`;
const RulesRe = /oxc_macros::declare_all_lint_rules.*{([^*]*),\s*}/gm;
const rulesMap = new Map<string, Array<string>>();
const ignoreScope = new Set(["oxc", "deepscan"]);

const scopeMaps = {
	eslint: "",
	typescript: "@typescript-eslint",
};

async function generateRules(isCjs = false) {
	await axios.get(oxlintRulesUrl).then((response) => {
		const rules = RulesRe.exec(response.data || "")?.[1];
		if (rules) {
			for (const rule of rules.trim().split(",")) {
				const [scope, name] = rule.trim().split("::");
				rulesMap.has(scope)
					? rulesMap.get(scope)?.push(name)
					: rulesMap.set(scope, [name]);
			}
		}
	});

	const exportScopes: string[] = [];
	let code =
		"// These rules are automatically generated by scripts/generate-rules.ts\n\n";

	for (const scope of rulesMap.keys()) {
		if (ignoreScope.has(scope)) {
			continue;
		}
		exportScopes.push(scope);
		const rules = rulesMap.get(scope);
		code +=
			`\nconst ` +
			scope.replaceAll(/_(\w)/g, (_, c) => c.toUpperCase()) +
			"Rules" +
			" = {\n";
		const ruleScope = Reflect.has(scopeMaps, scope)
			? scopeMaps[scope as "eslint"]
			: scope.replace("_", "-");
		code += rules
			?.map((rule) => {
				return `  "${ruleScope ? ruleScope + "/" : ""}${rule.replaceAll(
					"_",
					"-",
				)}": "off"`;
			})
			.join(",\n");
		code += "\n}\n\n";
	}

	code += isCjs ? "module.exports = {\n" : "export {\n";
	code += exportScopes
		.map((scope) => {
			return `  ${scope.replaceAll(/_(\w)/g, (_, c) =>
				c.toUpperCase(),
			)}Rules`;
		})
		.join(",\n");
	code += "\n}";

	writeFileSync(
		path.resolve(__dirname, `../rules.${isCjs ? "cjs" : "js"}`),
		code,
	);
}

await generateRules();
await generateRules(true);
