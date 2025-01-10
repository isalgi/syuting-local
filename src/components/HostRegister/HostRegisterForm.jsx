const formFields = [
  { label: "Name", placeholder: "Enter your name", id: "name", type: "text" },
  {
    label: "Phone",
    placeholder: "Enter your phone number",
    id: "phone",
    type: "tel",
  },
  {
    label: "Email",
    placeholder: "Enter your email address",
    id: "email",
    type: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    id: "password",
    type: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Re-enter your password",
    id: "confirmPassword",
    type: "password",
  },
  {
    label: "ID Card",
    placeholder: "Enter your ID Card",
    id: "idCard",
    type: "text",
  },
  {
    label: "Host Location",
    placeholder: "Enter your location",
    id: "hostLocation",
    type: "text",
  },
];

const HostRegisterForm = () => {
  return (
    <div className="w-full max-w-3xl px-12 py-16 ">
      <h1 className="text-4xl font-bold text-black mb-8">Register as Host</h1>
      <form className="flex flex-col gap-6 bg-white rounded-3xl shadow-xl p-8">
        {formFields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <label htmlFor={field.id} className="font-medium text-black mb-2">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 mt-1 bg-white rounded-md border border-gray-300"
            />
          </div>
        ))}
        <div className="flex flex-col mt-5">
          <label className="font-medium text-black mb-2">
            Pick your Location
          </label>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.1081579091029!2d106.76827716580601!3d-6.254948226083982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f19cbf5f91e9%3A0x1f43ed0d9b13f1b9!2sTIGER%20WONG%20ENTERTAINMENT!5e0!3m2!1sen!2sid!4v1736466737222!5m2!1sen!2sid"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
        <button
          type="submit"
          className="w-full bg-red-400 text-white py-3 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 mt-6"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default HostRegisterForm;
