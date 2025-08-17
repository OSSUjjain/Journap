// src/components/nav-vortex-ai.tsx

"use client";

import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

const chatHistory = [
  "Can you make me a MCQ...",
  "What topics are in the fro...",
  "How to implement a custom...",
  "What is the difference bet...",
  "Can you write a poem about...",
  "Explain the theory of relati...",
];

export function NavVortexAi() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col gap-2 px-2 mt-6">
      <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider px-2">
        Vortex AI
      </h3>
      <div className="flex flex-col gap-1">
        {/* New Chat Button */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors">
          <Plus className="h-4 w-4" />
          <span>New Chat</span>
        </button>

        {/* Chat History Dropdown */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
          <div className="flex items-center justify-between px-4">
            <h4 className="text-sm font-medium text-gray-700">History</h4>
            <CollapsibleTrigger asChild>
              <button>
                {isOpen ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            {/* Scrollable history list */}
            <div className="max-h-40 overflow-y-auto space-y-1">
              {chatHistory.map((item, index) => (
                <p key={index} className="px-4 py-1 text-sm text-gray-600 truncate hover:text-gray-900 transition-colors">
                  {item}
                </p>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}