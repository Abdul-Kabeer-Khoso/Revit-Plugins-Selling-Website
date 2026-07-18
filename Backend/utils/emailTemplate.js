// export const purchaseEmailTemplate = ({
//   customerEmail,
//   pluginName,
//   price,
//   licenses,
//   downloadLink,
// }) => {
//   const licenseList = licenses
//     .map(
//       (license, index) => `
//         <div
//           style="
//             background:#f7f7f7;
//             padding:12px;
//             border-radius:6px;
//             font-weight:bold;
//             font-size:16px;
//             margin-bottom:10px;
//             border-left:4px solid #1976d2;
//             word-break:break-all;
//           "
//         >
//           License ${index + 1}: ${license.licenseKey}
//         </div>
//       `,
//     )
//     .join("");

//   return `
// <!DOCTYPE html>
// <html>

// <head>
// <meta charset="UTF-8">
// <title>Purchase Confirmation</title>
// </head>

// <body
// style="
// font-family:Arial,sans-serif;
// background:#f4f4f4;
// padding:30px;
// ">

// <div
// style="
// max-width:700px;
// margin:auto;
// background:#ffffff;
// border-radius:10px;
// padding:35px;
// ">

// <h2 style="color:#2c3e50;">
// 🎉 Thank you for your purchase!
// </h2>

// <p>Hello <strong>${customerEmail}</strong>,</p>

// <p>
// Your payment has been received successfully.
// Thank you for choosing our Revit Plugin.
// </p>

// <hr>

// <h3 style="color:#1976d2;">Purchase Details</h3>

// <p><strong>Plugin:</strong> ${pluginName}</p>

// <p><strong>Price:</strong> $${price}</p>

// <p><strong>Total Licenses:</strong> ${licenses.length}</p>

// <hr>

// <h3 style="color:#1976d2;">
// Your License Key${licenses.length > 1 ? "s" : ""}
// </h3>

// ${licenseList}

// <br>

// <a
// href="${downloadLink}"
// style="
// display:inline-block;
// background:#1976d2;
// color:white;
// padding:14px 24px;
// text-decoration:none;
// border-radius:6px;
// font-weight:bold;
// "
// >
// Download Plugin
// </a>

// <hr style="margin-top:35px;">

// <h3 style="color:#1976d2;">
// Installation Instructions
// </h3>

// <ul>
// <li>The <strong>.exe</strong> installer is a per-user installer. Do <strong>NOT</strong> run it as Administrator.</li>

// <li>The <strong>.msi</strong> installer is a per-machine installer and requires Administrator privileges.</li>

// <li>Both installers support the <strong>-quiet</strong> switch for silent installation.</li>
// </ul>

// <hr>

// <h3 style="color:#1976d2;">
// Activation Instructions
// </h3>

// <ol>

// <li>Install the plugin.</li>

// <li>Open Autodesk Revit.</li>

// <li>Open the plugin ribbon.</li>

// <li>Click <strong>Licensing / Activation</strong>.</li>

// <li>Enter your Email Address.</li>

// <li>Enter one of the License Keys above.</li>

// <li>Click Activate.</li>

// </ol>

// <hr>

// <h3 style="color:#1976d2;">
// Important Notes
// </h3>

// <ul>

// <li>Each license can be activated on <strong>one computer only.</strong></li>

// <li>Licenses are valid for <strong>one year</strong> from activation.</li>

// <li>Each purchased Revit version requires its own compatible plugin license.</li>

// <li>Please keep your license key secure and do not share it.</li>

// <li>If you replace your computer, contact support to transfer your license.</li>

// </ul>

// <hr>

// <p>

// If you have any questions or need assistance,
// simply reply to this email.

// </p>

// <p>

// Thank you for choosing our Revit Plugins!

// </p>

// </div>

// </body>

// </html>
// `;
// };
