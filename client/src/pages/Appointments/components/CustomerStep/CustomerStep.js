import { faker } from "@faker-js/faker";

const CustomerStep = ({ customer, updateCustomer }) => {
  return (
    <div className="customer step-3">
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="first-name"
          placeholder={faker.name.firstName()}
          value={customer.firstName}
          onChange={(e) => updateCustomer("firstName", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="last-name"
          placeholder="Doe"
          value={customer.lastName}
          onChange={(e) => updateCustomer("lastName", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="example@email.com"
          value={customer.email}
          onChange={(e) => updateCustomer("email", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          className="phone-number"
          placeholder="(320) 555-5555"
          value={customer.phoneNumber}
          onChange={(e) => updateCustomer("phoneNumber", e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomerStep;
