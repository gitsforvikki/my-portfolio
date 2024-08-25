import email from "../../../public/contact/mail.svg";
import phone from "../../../public/contact/phone.svg";
import location from "../../../public/contact/location.svg";

export type contactHeadingTypes = {
  heading: string;
  subHeading: string;
};

export type eachDataTypes = {
  eachInfoData: {
    name: string;
    value: string;
    image: string;
  };
};
export type contactDataType = {
  contactList: eachDataTypes[];
};

export const headingData = {
  heading: "Contact Info",
  subHeading:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.",
};

export const contactList = [
  {
    name: "Email",
    value: "vk@6484412@gmail.com",
    image: email,
  },
  {
    name: "Phome",
    value: "+91 62014 48872",
    image: phone,
  },
  {
    name: "Address",
    value: "Ahmedabad, Gujarat, 380081",
    image: location,
  },
];
