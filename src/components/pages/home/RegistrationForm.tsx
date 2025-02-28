import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { CountrySelector } from "@/components/common/country-selector";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const RegistrationForm = () => {
  return (
    <div className="flex flex-col gap-3 bg-surface-light p-8 rounded-md">
      <div className="flex flex-col">
        <span className="px-3 py-1 rounded-sm bg-primary-accent text-[10px] max-w-[97px] font-[500]">
          REGISTER NOW
        </span>
        <h3>Register for free to unlock your access.</h3>
        <p>
          Please provide us the below details and we will create an account for
          you.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-[100%] mt-4">
        <div className="flex gap-4">
          <Input type="text" placeholder="Company name*" />
          <Input type="text" placeholder="Trader name*" />
        </div>
        <Input type="email" placeholder="Email Address*" />
        <Input type="text" placeholder="Invoicing Address Line 1*" />
        <Input type="text" placeholder="Invoicing Address Line 2*" />
        <div className="flex gap-4">
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="ZIP/Postal Code" />
        </div>
        <CountrySelector />
        <div className="flex gap-4">
          <Input type="text" placeholder="Company Number (if any)" />
          <Input type="text" placeholder="VAT Number (if applicable)" />
        </div>
        <div className="flex gap-4">
          <Input type="text" placeholder="First Name*" />
          <Input type="text" placeholder="Last Name*" />
        </div>
        <div className="flex gap-4">
          <Input type="text" placeholder="Phone Number*" />
          <Input type="text" placeholder="Website Address" />
        </div>
        <div>
          <p className="mb-2">Type of Buisiness</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a buidiness type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select</SelectLabel>
                <SelectItem value="furniture_store">Furniture Store</SelectItem>
                <SelectItem value="ecommerce">Online Ecommerce Site</SelectItem>
                <SelectItem value="department">Department Store</SelectItem>
                <SelectItem value="garden">Garden Centre</SelectItem>
                <SelectItem value="gift_store">Gift Store</SelectItem>
                <SelectItem value="interior_designer">
                  Interior Designer
                </SelectItem>
                <SelectItem value="hotel">Hotel / Care Home</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex gap-2  mt-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subscribe to our emails for the latest updates and special offers.
            </label>
          </div>
        </div>
      </div>
      <Button className="bg-secondary-accent text-[16px] mt-4">
        Register Now!
      </Button>
    </div>
  );
};

export default RegistrationForm;
