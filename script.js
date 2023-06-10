const API_KEY ='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';

const submitBtn = document.getElementById("submit");

const getMessage = async () => {
    console.log('click')
  const options = {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "User", content: "Hello!" }],
      max_tokens:100
    }),
  };
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    console.log(data)

  } catch (error) {
    console.log(error);
  }
};

submitBtn.addEventListener("click", getMessage);
