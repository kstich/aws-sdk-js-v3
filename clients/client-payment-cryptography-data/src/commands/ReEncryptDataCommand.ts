// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ReEncryptDataInput,
  ReEncryptDataInputFilterSensitiveLog,
  ReEncryptDataOutput,
  ReEncryptDataOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_ReEncryptDataCommand, se_ReEncryptDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReEncryptDataCommand}.
 */
export interface ReEncryptDataCommandInput extends ReEncryptDataInput {}
/**
 * @public
 *
 * The output of {@link ReEncryptDataCommand}.
 */
export interface ReEncryptDataCommandOutput extends ReEncryptDataOutput, __MetadataBearer {}

/**
 * <p>Re-encrypt ciphertext using DUKPT, Symmetric and Asymmetric  Data Encryption Keys. </p>
 *          <p>You can either generate an encryption key within Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> or import your own encryption key by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. The <code>KeyArn</code> for use with this operation must be in a compatible key state with <code>KeyModesOfUse</code> set to <code>Encrypt</code>. In asymmetric encryption, ciphertext is encrypted using public component (imported by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>) of the asymmetric key pair created outside of Amazon Web Services Payment Cryptography. </p>
 *          <p>For symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports <code>TDES</code> and <code>AES</code> algorithms. For asymmetric encryption, Amazon Web Services Payment Cryptography supports <code>RSA</code>. To encrypt using DUKPT, a DUKPT key must already exist within your account with <code>KeyModesOfUse</code> set to <code>DeriveKey</code> or a new DUKPT can be generated by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a>.</p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DecryptData</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>EncryptData</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html">GetPublicCertificate</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, ReEncryptDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, ReEncryptDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // ReEncryptDataInput
 *   IncomingKeyIdentifier: "STRING_VALUE", // required
 *   OutgoingKeyIdentifier: "STRING_VALUE", // required
 *   CipherText: "STRING_VALUE", // required
 *   IncomingEncryptionAttributes: { // ReEncryptionAttributes Union: only one key present
 *     Symmetric: { // SymmetricEncryptionAttributes
 *       Mode: "STRING_VALUE", // required
 *       InitializationVector: "STRING_VALUE",
 *       PaddingType: "STRING_VALUE",
 *     },
 *     Dukpt: { // DukptEncryptionAttributes
 *       KeySerialNumber: "STRING_VALUE", // required
 *       Mode: "STRING_VALUE",
 *       DukptKeyDerivationType: "STRING_VALUE",
 *       DukptKeyVariant: "STRING_VALUE",
 *       InitializationVector: "STRING_VALUE",
 *     },
 *   },
 *   OutgoingEncryptionAttributes: {//  Union: only one key present
 *     Symmetric: {
 *       Mode: "STRING_VALUE", // required
 *       InitializationVector: "STRING_VALUE",
 *       PaddingType: "STRING_VALUE",
 *     },
 *     Dukpt: {
 *       KeySerialNumber: "STRING_VALUE", // required
 *       Mode: "STRING_VALUE",
 *       DukptKeyDerivationType: "STRING_VALUE",
 *       DukptKeyVariant: "STRING_VALUE",
 *       InitializationVector: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new ReEncryptDataCommand(input);
 * const response = await client.send(command);
 * // { // ReEncryptDataOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * //   CipherText: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ReEncryptDataCommandInput - {@link ReEncryptDataCommandInput}
 * @returns {@link ReEncryptDataCommandOutput}
 * @see {@link ReEncryptDataCommandInput} for command's `input` shape.
 * @see {@link ReEncryptDataCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyDataClientResolvedConfig | config} for PaymentCryptographyDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to an invalid resource error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptographyData service.</p>
 *
 * @public
 */
export class ReEncryptDataCommand extends $Command
  .classBuilder<
    ReEncryptDataCommandInput,
    ReEncryptDataCommandOutput,
    PaymentCryptographyDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PaymentCryptographyDataPlane", "ReEncryptData", {})
  .n("PaymentCryptographyDataClient", "ReEncryptDataCommand")
  .f(ReEncryptDataInputFilterSensitiveLog, ReEncryptDataOutputFilterSensitiveLog)
  .ser(se_ReEncryptDataCommand)
  .de(de_ReEncryptDataCommand)
  .build() {}
