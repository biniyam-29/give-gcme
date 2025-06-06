"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

interface DonationDetails {
  type: "project" | "missionary";
  title: string;
  amount: string;
  timestamp: string;
}

export default function ThankYouPage() {
  const router = useRouter();
  const [donationDetails, setDonationDetails] =
    useState<DonationDetails | null>(null);

  useEffect(() => {
    // Get donation details from session storage
    const storedDetails = sessionStorage.getItem("donationDetails");
    if (storedDetails) {
      setDonationDetails(JSON.parse(storedDetails));
      // Clear the stored details
      sessionStorage.removeItem("donationDetails");
    }
  }, []);

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">
            Thank You for Your Donation!
          </CardTitle>
          <CardDescription>
            Your generosity makes a difference in our mission.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {donationDetails && (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Donation Details:</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Type:</span>{" "}
                    {donationDetails.type === "project"
                      ? "Project"
                      : "Missionary"}{" "}
                    Support
                  </p>
                  <p>
                    <span className="font-medium">Title:</span>{" "}
                    {donationDetails.title}
                  </p>
                  <p>
                    <span className="font-medium">Amount:</span> ETB{" "}
                    {donationDetails.amount}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(donationDetails.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="mt-6 text-center">
            <Button onClick={handleReturnHome} className="w-full">
              Return to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
