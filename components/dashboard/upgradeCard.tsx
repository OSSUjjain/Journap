// src/components/ui/UpgradeCard.tsx

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import Link from "next/link";
import { GradientBorder } from "../gradientBorder";

export function UpgradeCard() {
  return (
    <GradientBorder className="relative border-none bg-transparent">
      <Card className="relative z-10 w-full h-fit rounded-[calc(0.75rem-1px)] bg-gradient-to-br from-white to-[#7D90D4] p-0 text-gray-800 shadow-none">
        <CardContent className="p-2 pt-2">
          <div className="flex items-center justify-start gap-2 mb-2">
            <CardTitle className="text-lg font-semibold">Upgrade To</CardTitle>
            <Badge
            variant="outline"
            className="flex items-center space-x-1 border-blue-500 text-blue-500 bg-blue-500/15"
            >
              <Crown className="h-3 w-3" />
              <span>Pro</span>
            </Badge>
          </div>
          <CardDescription className="text-xs">
            Bigger roadmaps, Make courses, Powerful Vortex features
          </CardDescription>
          <Link href="/subscription" passHref>
            <Button
              variant="secondary"
              className="w-full mt-2 font-semibold text-gray-800"
            >
              Upgrade
            </Button>
          </Link>
        </CardContent>
      </Card>
    </GradientBorder>
  );
}