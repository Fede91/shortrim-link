import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShortLink } from "./columns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface Props {
  data?: ShortLink | null;
  open?: boolean;
  setIsOpen?: (open: boolean) => void;
  onSave?: (data: ShortLink) => void;
}

export function ShortLinkDialog({ data, open, onSave, setIsOpen }: Props) {
  const [url, setUrl] = useState<string>("");
  const [key, setKey] = useState<string>("");

  const resetState = () => {
    setUrl("");
    setKey("");
  };

  const handleConfirmClick = () => {
    onSave && onSave({ url, key });

    resetState();
  };

  useEffect(() => {
    if (data) {
      setUrl(data.url);
      setKey(data.key);
    }
  }, [data]);

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      {/* <DialogTrigger>
        <Button className="h-8 px-2 lg:px-3" onClick={() => setIsOpen(true)}>
          New <PlusIcon className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md">
        {data ? (
          <DialogHeader>
            <DialogTitle>Edit shortlink</DialogTitle>
            <DialogDescription>Edit shortlink data.</DialogDescription>
          </DialogHeader>
        ) : (
          <DialogHeader>
            <DialogTitle>New shortlink</DialogTitle>
            <DialogDescription>Create new shortlink.</DialogDescription>
          </DialogHeader>
        )}
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="url" className="sr-only">
              Redirect to
            </Label>
            <Input
              id="url"
              value={url}
              placeholder="Redirect to"
              onChange={(event) => setUrl(event.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="key" className="sr-only">
              Short code
            </Label>
            <Input
              id="key"
              value={key}
              placeholder="Short code"
              readOnly={Boolean(data)}
              onChange={(event) => setKey(event.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="sm:justify-between">
          <DialogClose>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                resetState();
              }}
            >
              Close
            </Button>
          </DialogClose>
          <span>
            {data && (
              <Button type="button" variant="destructive">
                Delete
              </Button>
            )}
            <Button
              type="button"
              variant="default"
              onClick={handleConfirmClick}
            >
              Confirm
            </Button>
          </span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
