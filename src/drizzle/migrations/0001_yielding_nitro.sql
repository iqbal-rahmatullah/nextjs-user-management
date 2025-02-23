ALTER TABLE "address" DROP CONSTRAINT "User_id_fkey";
--> statement-breakpoint
ALTER TABLE "address" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."address"("user_id") ON DELETE cascade ON UPDATE cascade;