"use server";
import { ConvexHttpClient } from "convex/browser";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getDocuments(ids: Id<"documents">[]) {
  return await convex.query(api.documents.getBtIds, { ids });
}
export async function getUsers() {
  const { sessionClaims } = await auth();
  const clerk = await clerkClient();
  const org =
    sessionClaims && typeof sessionClaims === "object" && "o" in sessionClaims
      ? (sessionClaims as { o?: { id?: string } }).o
      : undefined;
  const response = await clerk.users.getUserList(
    org && org.id ? { organizationId: [org.id] } : {}
  );

  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
    color: "",
  }));
  return users;
}
