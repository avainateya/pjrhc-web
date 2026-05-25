export const sendWhatsApp = async ({
  phone,
  name,
  date,
  time,
  branch,
}: {
  phone: string;
  name: string;
  date: string;
  time: string;
  branch?: string;
}) => {
  try {

    // remove spaces/symbols
    const cleanedPhone = phone.replace(/\D/g, "");

    const message = `Hello ${name},

Your appointment at Dr. P. Jagan Mohan Rao Homoeo Clinic is confirmed.

📅 Date: ${date}
⏰ Time: ${time}
🏥 Branch: ${branch}

Please arrive 5 minutes early.

Thank you for visiting our clinic.`;

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,

          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messaging_product: "whatsapp",

          to: `91${cleanedPhone}`,

          type: "text",

          text: {
            preview_url: false,
            body: message,
          },
        }),
      }
    );

    const result = await response.json();

    console.log("WhatsApp Result:", result);

    if (!response.ok) {
      throw new Error(result.error?.message);
    }

    return {
      success: true,
    };

  } catch (err: any) {
    console.error("WhatsApp error:", err);

    return {
      success: false,
      error: err.message,
    };
  }
};