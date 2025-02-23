ALTER TABLE "address" DROP CONSTRAINT "User_id_fkey";
--> statement-breakpoint
ALTER TABLE "address" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."address"("id") ON DELETE cascade ON UPDATE cascade;