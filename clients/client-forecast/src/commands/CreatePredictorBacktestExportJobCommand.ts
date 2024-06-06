// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreatePredictorBacktestExportJobRequest,
  CreatePredictorBacktestExportJobRequestFilterSensitiveLog,
  CreatePredictorBacktestExportJobResponse,
} from "../models/models_0";
import {
  de_CreatePredictorBacktestExportJobCommand,
  se_CreatePredictorBacktestExportJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePredictorBacktestExportJobCommand}.
 */
export interface CreatePredictorBacktestExportJobCommandInput extends CreatePredictorBacktestExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreatePredictorBacktestExportJobCommand}.
 */
export interface CreatePredictorBacktestExportJobCommandOutput
  extends CreatePredictorBacktestExportJobResponse,
    __MetadataBearer {}

/**
 * <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two
 *             folders containing CSV or Parquet files are exported to your specified S3 bucket.</p>
 *          <p> The export file names will match the following conventions:</p>
 *          <p>
 *             <code><ExportJobName>_<ExportTimestamp>_<PartNumber>.csv</code>
 *          </p>
 *          <p>The <ExportTimestamp> component is in Java SimpleDate format
 *             (yyyy-MM-ddTHH-mm-ssZ).</p>
 *          <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3
 *             bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
 *             bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p>
 *          <note>
 *             <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you
 *                 can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreatePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreatePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // CreatePredictorBacktestExportJobRequest
 *   PredictorBacktestExportJobName: "STRING_VALUE", // required
 *   PredictorArn: "STRING_VALUE", // required
 *   Destination: { // DataDestination
 *     S3Config: { // S3Config
 *       Path: "STRING_VALUE", // required
 *       RoleArn: "STRING_VALUE", // required
 *       KMSKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Format: "STRING_VALUE",
 * };
 * const command = new CreatePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreatePredictorBacktestExportJobResponse
 * //   PredictorBacktestExportJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePredictorBacktestExportJobCommandInput - {@link CreatePredictorBacktestExportJobCommandInput}
 * @returns {@link CreatePredictorBacktestExportJobCommandOutput}
 * @see {@link CreatePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link CreatePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>There is already a resource with this name. Try again with a different name.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 * @public
 */
export class CreatePredictorBacktestExportJobCommand extends $Command
  .classBuilder<
    CreatePredictorBacktestExportJobCommandInput,
    CreatePredictorBacktestExportJobCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecast", "CreatePredictorBacktestExportJob", {})
  .n("ForecastClient", "CreatePredictorBacktestExportJobCommand")
  .f(CreatePredictorBacktestExportJobRequestFilterSensitiveLog, void 0)
  .ser(se_CreatePredictorBacktestExportJobCommand)
  .de(de_CreatePredictorBacktestExportJobCommand)
  .build() {}
