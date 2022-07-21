import * as cdk from '@aws-cdk/core';
import * as stepfunctions from '@aws-cdk/aws-stepfunctions';
import * as apigateway from '@aws-cdk/aws-apigateway';


export class StepfunctionsRestApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const machineDefinition = new stepfunctions.Pass(this, 'PassState', {
      result: {value: 'Hello!'},
    })

    const stateMachine = new stepfunctions.StateMachine(this, 'MyStateMachine', {
      definition: machineDefinition,
      stateMachineType: stepfunctions.StateMachineType.EXPRESS,
    })

    const api = new apigateway.StepFunctionsRestApi(this, 'StepFunctionsRestApi', {
      stateMachine: stateMachine
    })
  }
}
