import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-[27px]">
      <div className="flex flex-col items-start xs:flex-row xs:items-center">
        <Avatar className="h-9 w-9 mb-2 mx-auto xs:mx-0">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@gmail.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex flex-col items-start xs:flex-row xs:items-center">
        <Avatar className="h-9 w-9 mb-2 mx-auto xs:mx-0">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>HJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Hors Jeux</p>
          <p className="text-sm text-muted-foreground">hors.jeux@gmail.com</p>
        </div>
        <div className="ml-auto font-medium">+$89.00</div>
      </div>
      <div className="flex flex-col items-start xs:flex-row xs:items-center">
        <Avatar className="h-9 w-9 mb-2 mx-auto xs:mx-0">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>YE</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Yazan Eltayeb</p>
          <p className="text-sm text-muted-foreground">
            yazaneltayeb@gmail.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$19.00</div>
      </div>
      <div className="flex flex-col items-start xs:flex-row xs:items-center">
        <Avatar className="h-9 w-9 mb-2 mx-auto xs:mx-0">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ahmed Mohammadi</p>
          <p className="text-sm text-muted-foreground">
            AhmedMohammadi@yahoo.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$119.00</div>
      </div>
      <div className="flex flex-col items-start xs:flex-row xs:items-center">
        <Avatar className="h-9 w-9 mb-2 mx-auto xs:mx-0">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>BB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">BadrEddine Bohi</p>
          <p className="text-sm text-muted-foreground">
            BadrEddineBohi@gmail.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$119.00</div>
      </div>
    </div>
  );
}
