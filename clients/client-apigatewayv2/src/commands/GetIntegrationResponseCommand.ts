// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIntegrationResponseRequest, GetIntegrationResponseResponse } from "../models/models_0";
import { de_GetIntegrationResponseCommand, se_GetIntegrationResponseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIntegrationResponseCommand}.
 */
export interface GetIntegrationResponseCommandInput extends GetIntegrationResponseRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationResponseCommand}.
 */
export interface GetIntegrationResponseCommandOutput extends GetIntegrationResponseResponse, __MetadataBearer {}

/**
 * <p>Gets an IntegrationResponses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetIntegrationResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetIntegrationResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetIntegrationResponseRequest
 *   ApiId: "STRING_VALUE", // required
 *   IntegrationId: "STRING_VALUE", // required
 *   IntegrationResponseId: "STRING_VALUE", // required
 * };
 * const command = new GetIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * // { // GetIntegrationResponseResponse
 * //   ContentHandlingStrategy: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //   IntegrationResponseId: "STRING_VALUE",
 * //   IntegrationResponseKey: "STRING_VALUE",
 * //   ResponseParameters: { // IntegrationParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ResponseTemplates: { // TemplateMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   TemplateSelectionExpression: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIntegrationResponseCommandInput - {@link GetIntegrationResponseCommandInput}
 * @returns {@link GetIntegrationResponseCommandOutput}
 * @see {@link GetIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 * @public
 */
export class GetIntegrationResponseCommand extends $Command
  .classBuilder<
    GetIntegrationResponseCommandInput,
    GetIntegrationResponseCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "GetIntegrationResponse", {})
  .n("ApiGatewayV2Client", "GetIntegrationResponseCommand")
  .f(void 0, void 0)
  .ser(se_GetIntegrationResponseCommand)
  .de(de_GetIntegrationResponseCommand)
  .build() {}
