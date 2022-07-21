#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { StepfunctionsRestApiStack } from "../lib/stepfunctions-rest-api-stack";
import { config } from "dotenv";


config();
const env = {
  account: process.env.ACCOUNT,
  region: process.env.REGION
}

const app = new cdk.App();
new StepfunctionsRestApiStack(app, "StepfunctionsRestApiStack", { env });
