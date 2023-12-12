import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import { useState } from "react";

const Notifications = () => {
  const message = (
    <Alert>
      <AlertTitle className="flex justify-between items-center pb-3 text-wrap">
        Notification Updated!
        <X size={14} onClick={() => setTitle(false)} />
      </AlertTitle>
      <AlertDescription>
        Your Notification has been updated successfully.
      </AlertDescription>
    </Alert>
  );
  const [title, setTitle] = useState(false);
  return (
    <form>
      <div className="mx-auto w-10/12 grid grid-cols-2 gap-8">
        <p className="col-span-full text-center text-lg pb-4 text-wrap">
          Notify me about
        </p>
        <div className="border-collapse border-slate-600 border rounded py-2">
          <div className="mx-auto flex h-8 w-10/12 justify-between items-center space-x-2">
            <Label
              htmlFor="receivedmessages"
              className="ml-4 text-wrap capitalize"
            >
              received messages
            </Label>
            <Switch id="receivedmessages" />
          </div>
        </div>
        <div className="border-collapse border-slate-600 border rounded py-2">
          <div className="mx-auto flex h-8 w-10/12 justify-between items-center space-x-2">
            <Label htmlFor="addedproduct" className="ml-4 text-wrap capitalize">
              added product
            </Label>
            <Switch id="addedproduct" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-10/12 grid sm:grid-cols-2 gap-8">
        <Label className="col-span-full text-center text-lg py-4 text-wrap">
          Email Notifications
        </Label>
        <div className="border-collapse border-slate-600 border rounded py-2">
          <div className="mx-auto flex h-8 w-10/12 justify-between items-center space-x-2">
            <Label
              htmlFor="CommunicationEmails"
              className="text-wrap capitalize"
            >
              Communication emails
            </Label>
            <Switch id="CommunicationEmails" />
          </div>
        </div>
        <div className="border-collapse border-slate-600 border rounded py-2">
          <div className="mx-auto flex h-8 w-10/12 justify-between items-center space-x-2">
            <Label
              htmlFor="SecurityEmails"
              className="ml-4 text-wrap capitalize"
            >
              Security emails
            </Label>
            <Switch id="SecurityEmails" />
          </div>
        </div>
        <div className="border-collapse border-slate-600 border rounded py-2">
          <div className="mx-auto flex h-8 w-10/12 justify-between items-center space-x-2">
            <Label
              htmlFor="MarketingEmails"
              className="ml-4 text-wrap capitalize"
            >
              Marketing emails
            </Label>
            <Switch id="MarketingEmails" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            setTitle(true);
            setTimeout(() => {
              setTitle(false);
            }, 3000);
          }}
          type="button"
          className="text-wrap"
        >
          Update Notification
        </Button>
      </div>
      <div className="mt-4 -ml-4 xsm:absolute xsm:bottom-4 xsm:right-4">
        {title && message}
      </div>
    </form>
  );
};

export default Notifications;
