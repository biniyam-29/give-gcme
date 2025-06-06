"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ExternalLink } from "lucide-react";

export default function TestPaymentPage() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const handleTestPayment = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/test-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: parseFloat(amount) }),
      });

      const data = await response.json();
      setResponse(data);

      if (response.ok) {
        toast.success("Payment URL generated successfully");
      } else {
        toast.error(data.message || "Payment test failed");
      }
    } catch (error) {
      console.error("Error testing payment:", error);
      toast.error("An error occurred while testing payment");
    } finally {
      setLoading(false);
    }
  };

  const handleProceedToPayment = () => {
    if (response?.paymentUrl) {
      window.open(response.paymentUrl, "_blank");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Test Payment Gateway</CardTitle>
          <CardDescription>
            Test the payment gateway integration with a sample payment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (USD)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>
            <Button
              onClick={handleTestPayment}
              disabled={loading || !amount}
              className="w-full"
            >
              {loading ? "Generating Payment URL..." : "Generate Payment URL"}
            </Button>

            {response?.paymentUrl && (
              <div className="mt-4 space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Payment URL Generated:</h3>
                  <p className="text-sm text-muted-foreground break-all">
                    {response.paymentUrl}
                  </p>
                </div>
                <Button
                  onClick={handleProceedToPayment}
                  className="w-full"
                  variant="default"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Proceed to Payment
                </Button>
              </div>
            )}

            {response && !response.paymentUrl && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Response:</h3>
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
