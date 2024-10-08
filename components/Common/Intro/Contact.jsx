import React from "react";
import { CONTACTS } from "../../../constants/constants";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-2 pt-6">
      <div className="flex flex-col">
        <span className="text-Green text-base font-bold">Email</span>
        <span className="text-base text-Snow">
          {/* <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link> */}
          {CONTACTS.EMAIL}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-Green text-base font-bold">Phone</span>
        <span className="text-base text-Snow">{CONTACTS.PHONE}</span>
      </div>
    </div>
  );
};

export default Contact;
