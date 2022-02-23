var paymentData = [
    {
      cardNum: "1234-5678-9123",
      cvv: "123",
      exp: "04/2025",
      name: "Dishant Rana",
      otp: "123",
    },
    {
      cardNum: "9876-5432-1987",
      cvv: "321",
      exp: "05/2026",
      name: "Diwanshi Rana",
      otp: "321",
    },
  ];
  localStorage.setItem("payData", JSON.stringify(paymentData));
  