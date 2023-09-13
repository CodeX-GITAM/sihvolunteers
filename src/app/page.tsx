"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import IssueCard from "@/components/IssueCard";

// Define an interface to describe the shape of each issue object
interface Issue {
  team: string;
  teamlead: string;
  category: string; // You can update this type to match your actual data structure
  desk: string; // Update the type accordingly
  contact: string; // Update the type accordingly
  query: string; // Update the type accordingly
  assignee: string; // Update the type accordingly
  status: string; // Update the type accordingly
}

export default function Home() {
  const [issueData, setIssueData] = useState<Issue[]>([]);

  useEffect(() => {
    axios
      .get(link2[Math.floor(Math.random() * link2.length)])
      .then((res) => {
        const data = res.data.filter(
          (issue: Issue) => issue.status !== "close"
        );
        setIssueData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const link2 = [
    "https://sheet.best/api/sheets/6678af82-939f-4bae-acb4-8f1584859b38",
    "https://sheet.best/api/sheets/3657565b-9a7d-44cd-9240-598d1e9db443",
    "https://sheet.best/api/sheets/b88990e6-6751-4caa-9108-70b425c82463",
  ];

  return (
    <main className="min-h-screen text-center  flex flex-col items-center  mt-[65px] ">
      <h1 className="font-bold m-6 text-3xl">Issue Management System</h1>
      <div className="grid lg:grid-cols-3 gap-3 my-3 sm:grid-cols-2 grid-cols-1">
        {issueData.map((issue) => (
          <IssueCard
            key={issue.desk}
            teamName={issue.team}
            teamlead={issue.teamlead}
            issueType={issue.category}
            deskNumber={issue.desk}
            leadContact={issue.contact}
            issueDescription={issue.query}
            assignedTo={issue.assignee}
            status={issue.status}
          />
        ))}
      </div>
    </main>
  );
}
