export const purchaseEmailTemplate = ({
  customerEmail,
  pluginName,
  price,
  licenseKey,
  downloadLink,
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
      </head>

      <body style="font-family: Arial, sans-serif; background:#f4f4f4; padding:30px;">

        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; padding:30px;">

          <h2 style="color:#2c3e50;">
            Thank you for your purchase 🎉
          </h2>

          <p>Hello <strong>${customerEmail}</strong>,</p>

          <p>
            Your payment has been received successfully.
            Below are your purchase details.
          </p>

          <hr>

          <p><strong>Plugin:</strong> ${pluginName}</p>

          <p><strong>Price:</strong> $${price}</p>

          <p><strong>License Key:</strong></p>

          <div
            style="
              background:#f7f7f7;
              padding:12px;
              border-radius:6px;
              font-weight:bold;
              font-size:18px;
            "
          >
            ${licenseKey}
          </div>

          <br>

          <a
            href="${downloadLink}"
            style="
              display:inline-block;
              background:#1976d2;
              color:white;
              padding:12px 20px;
              text-decoration:none;
              border-radius:6px;
            "
          >
            Download Plugin
          </a>

          <br><br>

          <p>
            If you have any questions, simply reply to this email.
          </p>

          <p>Thank you for choosing our Revit Plugins!</p>

        </div>

      </body>
    </html>
  `;
};
