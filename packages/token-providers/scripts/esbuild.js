/**
 *
 * This script builds a minimal bundle of the code
 * in SSOOIDCClient and its CreateTokenCommand, with everything else
 * left external.
 *
 * This is to break a cyclical dependency with the credential providers
 * and certain services used by those providers.
 *
 */

const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

const root = path.join(__dirname, "..", "..", "..");

(async () => {
  const defaultRuntimeConfigFile = path.join(root, "clients", "client-sso-oidc", "src", "runtimeConfig.ts");
  const nodeRuntimeConfig = fs.readFileSync(defaultRuntimeConfigFile);
  const browserRuntimeConfig = fs.readFileSync(
    path.join(path.dirname(defaultRuntimeConfigFile), "runtimeConfig.browser.ts")
  );

  const clientSsoOidcPkgJson = require(path.join(root, "clients", "client-sso-oidc", "package.json"));
  const tokenProvidersPkgJson = require(path.join(root, "packages", "token-providers", "package.json"));

  for (const platform of ["browser", "node"]) {
    if (platform === "browser") {
      fs.writeFileSync(defaultRuntimeConfigFile, browserRuntimeConfig);
    } else {
      fs.writeFileSync(defaultRuntimeConfigFile, nodeRuntimeConfig);
    }

    const outfile = path.join(
      root,
      "packages",
      "token-providers",
      "src",
      "client-sso-oidc-bundle",
      `dist-${platform}.ts`
    );

    await esbuild.build({
      platform,
      bundle: true,
      format: "esm",
      mainFields: ["module", "main"],
      entryPoints: [path.join(root, "packages", "token-providers", "scripts", "api", "source.js")],
      outfile: outfile,
      external: ["tslib", "@aws-crypto/*", "@smithy/*", "@aws-sdk/*"],
    });

    await new Promise((r) => setTimeout(r, 1000));

    fs.writeFileSync(outfile, `// @ts-nocheck \n/* eslint-disable */\n` + fs.readFileSync(outfile));
  }

  fs.writeFileSync(defaultRuntimeConfigFile, nodeRuntimeConfig);

  // add a dependency on the externals of the bundle, using the declared dependencies of SSOOIDCClient.
  tokenProvidersPkgJson.dependencies = {
    ...clientSsoOidcPkgJson.dependencies,
    ...tokenProvidersPkgJson.dependencies,
  };

  fs.writeFileSync(
    path.join(root, "packages", "token-providers", "package.json"),
    JSON.stringify(tokenProvidersPkgJson, null, 2)
  );
})();
