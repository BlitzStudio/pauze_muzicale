import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client(process.env["GOOGLE_ID"]);

const googleIdentity = async function (token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env["GOOGLE_ID"],
  });
  return ticket.getPayload();
};

export { googleIdentity };
