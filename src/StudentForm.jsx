import { useState } from "react";

function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <form>
      <input name="name" placeholder="Name"
        value={form.name} onChange={handleChange} />

      <input name="email" placeholder="Email"
        value={form.email} onChange={handleChange} />

      <input name="phone" placeholder="Phone"
        value={form.phone} onChange={handleChange} />

      <input name="city" placeholder="City"
        value={form.city} onChange={handleChange} />

      <input name="password" type="password"
        placeholder="Password" value={form.password}
        onChange={handleChange} />
    </form>
  );
}

export default StudentForm;