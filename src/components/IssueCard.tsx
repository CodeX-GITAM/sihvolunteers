"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
const IssueCard = (props: any) => {
  const [assignee, setAssignee] = useState("");
  const {
    teamName,
    teamlead,
    issueType,
    deskNumber,
    leadContact,
    issueDescription,
    assignedTo,
    status,
  } = props;
  const link2 = [
    "https://sheet.best/api/sheets/6678af82-939f-4bae-acb4-8f1584859b38",
    "https://sheet.best/api/sheets/3657565b-9a7d-44cd-9240-598d1e9db443",
    "https://sheet.best/api/sheets/b88990e6-6751-4caa-9108-70b425c82463",
    "https://sheet.best/api/sheets/5e6a99a3-150b-4d7d-8dc3-c2a758237618",
    "https://sheet.best/api/sheets/f143b510-4f81-47d9-aa76-93eab3a305d0",
  ];
  const assign: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    let url = link2[Math.floor(Math.random() * link2.length)];
    url = url + "/" + String(Number(deskNumber) - 1);
    axios
      .patch(url, {
        assignee: assignee,
      })
      .then((res) => {
        alert("assigned successfully");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };
  const solve: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    //i need to update the status column in the sheet where desk is equal to deskNumber
    let url = link2[Math.floor(Math.random() * link2.length)];
    url = url + "/" + String(Number(deskNumber) - 1);
    axios
      .patch(url, {
        status: "close",
      })
      .then((res) => {
        alert("solved successfully");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="text-black w-[300px] h-auto bg-slate-300 rounded-lg shadow-sm p-2 ">
      <h1 className="font-bold font-sans m-2 text-[16px]">{teamName}</h1>
      <p className="font-sans m-2 text-left text-[12px] ">{issueDescription}</p>
      <div className="text-left text-[11px]">
        <h3>Desk Number : {deskNumber}</h3>
        <h3>Issue Type : {issueType}</h3>
        <h3>Lead Contatct : {leadContact}</h3>
        <h3>Assigned to : {assignedTo}</h3>
      </div>
      <form
        onSubmit={assign}
        className={` ${assignedTo.length != 0 ? "hidden" : "block"}`}>
        <input
          required
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          type="text"
          className="p-2 rounded-lg w-[150px] h-[30px]"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white font-bold rounded-lg py-2 px-4 m-2">
          assign
        </button>
      </form>
      <form onSubmit={solve}>
        <button
          type="submit"
          className="bg-red-700 text-white font-bold rounded-lg py-2 px-5 m-2">
          close
        </button>
      </form>
    </div>
  );
};

export default IssueCard;
