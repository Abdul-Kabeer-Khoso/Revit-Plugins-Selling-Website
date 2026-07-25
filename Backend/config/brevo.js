import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

const apiInstance = new TransactionalEmailsApi();

apiInstance.setApiKey(
  TransactionalEmailsApi.ApiKeys.apiKey,
  process.env.BREVO_API_KEY,
);

export { apiInstance, SendSmtpEmail };
