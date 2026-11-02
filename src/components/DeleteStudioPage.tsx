'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";



const DeleteStudioPage = ({id}: {id: string}) => {
    const handleDelete = async ()=>{

        const res = await fetch(`http://localhost:5000/studios/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            redirect("/studios");
          toast.success("Studio deleted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          // Handle successful deletion (e.g., update UI, show success message)
        } else {
          toast.error("Failed to delete studio.", {
            position: "top-right",
            autoClose: 3000,
          });
          // Handle deletion error (e.g., show error message)
        }
    }


    return (
       <AlertDialog>
  <AlertDialogTrigger render={
      <Button
                  variant="destructive"
                  className="h-10  px-5 hover:cursor-pointer"
                >
                  <span className="flex items-center">
                    <Trash2 size={16} className="mr-2" />
                    Delete
                  </span>
                </Button>
  }>
  
  </AlertDialogTrigger>
  <AlertDialogContent>
 
<AlertDialogHeader className="space-y-3">
  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
    <Trash2 className="h-7 w-7 text-red-600" />
  </div>

  <AlertDialogTitle className="text-center text-xl font-bold capitalize text-slate-900">
    Are you absolutely sure?
  </AlertDialogTitle>

  <AlertDialogDescription className="text-center text-sm leading-6 text-slate-500">
    This action cannot be undone. This will permanently delete
    the studio and remove all associated data.
  </AlertDialogDescription>
</AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    );
};

export default DeleteStudioPage;