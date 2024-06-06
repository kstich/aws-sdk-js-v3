// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetWorkUnitsRequest, GetWorkUnitsResponse } from "../models/models_0";
import { de_GetWorkUnitsCommand, se_GetWorkUnitsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkUnitsCommand}.
 */
export interface GetWorkUnitsCommandInput extends GetWorkUnitsRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkUnitsCommand}.
 */
export interface GetWorkUnitsCommandOutput extends GetWorkUnitsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetWorkUnitsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetWorkUnitsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetWorkUnitsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   QueryId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkUnitsCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkUnitsResponse
 * //   NextToken: "STRING_VALUE",
 * //   QueryId: "STRING_VALUE", // required
 * //   WorkUnitRanges: [ // WorkUnitRangeList // required
 * //     { // WorkUnitRange
 * //       WorkUnitIdMax: Number("long"), // required
 * //       WorkUnitIdMin: Number("long"), // required
 * //       WorkUnitToken: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetWorkUnitsCommandInput - {@link GetWorkUnitsCommandInput}
 * @returns {@link GetWorkUnitsCommandOutput}
 * @see {@link GetWorkUnitsCommandInput} for command's `input` shape.
 * @see {@link GetWorkUnitsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ExpiredException} (client fault)
 *  <p>Contains details about an error where the query request expired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link WorkUnitsNotReadyYetException} (client fault)
 *  <p>Contains details about an error related to work units not being ready.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class GetWorkUnitsCommand extends $Command
  .classBuilder<
    GetWorkUnitsCommandInput,
    GetWorkUnitsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "GetWorkUnits", {})
  .n("LakeFormationClient", "GetWorkUnitsCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkUnitsCommand)
  .de(de_GetWorkUnitsCommand)
  .build() {}
