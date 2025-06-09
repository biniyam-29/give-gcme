"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import DonationModal from "@/components/donation-modal";
import Header from "@/components/header";

export default function DonatePage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as "project" | "missionary" | null;
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <DonationModal
        isOpen={true}
        onClose={() => window.history.back()}
        type={type || "project"}
        title={title || ""}
        description={description || undefined}
      />
    </div>
  );
} 