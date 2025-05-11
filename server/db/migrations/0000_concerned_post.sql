CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(200),
	"email" varchar(100) NOT NULL,
	"password" varchar(256),
	"provider" varchar(50),
	"provider_sub" varchar(500),
	"avatar" varchar(500),
	"role" varchar(20),
	"gender" varchar(20),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp (3),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
