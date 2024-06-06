// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateForecastRequest,
  CreateForecastRequestFilterSensitiveLog,
  CreateForecastResponse,
} from "../models/models_0";
import { de_CreateForecastCommand, se_CreateForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateForecastCommand}.
 */
export interface CreateForecastCommandInput extends CreateForecastRequest {}
/**
 * @public
 *
 * The output of {@link CreateForecastCommand}.
 */
export interface CreateForecastCommandOutput extends CreateForecastResponse, __MetadataBearer {}

/**
 * <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was
 *       used to train the predictor. This is known as inference. To retrieve the forecast for a single
 *       item at low latency, use the  operation. To
 *       export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p>
 *          <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which
 *       you specify in the <a>CreatePredictor</a> request. When you query a forecast, you
 *       can request a specific date range within the forecast.</p>
 *          <p>To get a list of all your forecasts, use the <a>ListForecasts</a>
 *       operation.</p>
 *          <note>
 *             <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was
 *         used to create the predictor.</p>
 *          </note>
 *          <p>For more information, see <a>howitworks-forecast</a>.</p>
 *          <note>
 *             <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query
 *         or export the forecast. Use the <a>DescribeForecast</a> operation to get the
 *         status.</p>
 *          </note>
 *          <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor.
 *       However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // CreateForecastRequest
 *   ForecastName: "STRING_VALUE", // required
 *   PredictorArn: "STRING_VALUE", // required
 *   ForecastTypes: [ // ForecastTypes
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   TimeSeriesSelector: { // TimeSeriesSelector
 *     TimeSeriesIdentifiers: { // TimeSeriesIdentifiers
 *       DataSource: { // DataSource
 *         S3Config: { // S3Config
 *           Path: "STRING_VALUE", // required
 *           RoleArn: "STRING_VALUE", // required
 *           KMSKeyArn: "STRING_VALUE",
 *         },
 *       },
 *       Schema: { // Schema
 *         Attributes: [ // SchemaAttributes
 *           { // SchemaAttribute
 *             AttributeName: "STRING_VALUE",
 *             AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 *           },
 *         ],
 *       },
 *       Format: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateForecastCommand(input);
 * const response = await client.send(command);
 * // { // CreateForecastResponse
 * //   ForecastArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateForecastCommandInput - {@link CreateForecastCommandInput}
 * @returns {@link CreateForecastCommandOutput}
 * @see {@link CreateForecastCommandInput} for command's `input` shape.
 * @see {@link CreateForecastCommandOutput} for command's `response` shape.
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
export class CreateForecastCommand extends $Command
  .classBuilder<
    CreateForecastCommandInput,
    CreateForecastCommandOutput,
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
  .s("AmazonForecast", "CreateForecast", {})
  .n("ForecastClient", "CreateForecastCommand")
  .f(CreateForecastRequestFilterSensitiveLog, void 0)
  .ser(se_CreateForecastCommand)
  .de(de_CreateForecastCommand)
  .build() {}
