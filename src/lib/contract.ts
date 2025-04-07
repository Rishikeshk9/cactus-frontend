import { AptosClient, AptosAccount, FaucetClient, Types } from "aptos";
import { Buffer } from "buffer";

export interface Task {
    task_id: string;
    orchestrator: string;
    client: string;
    compute_time_ms: number;
    gpu_resources: number;
    model_type: string;
    result_hash: string;
    payment_amount: number;
    status: number;
    created_at: number;
    completed_at: number;
}

export interface OrchestratorStats {
    total_compute_time: number;
    successful_tasks: number;
    reputation_score: number;
    stake_amount: number;
}

export class CactusContract {
    private client: AptosClient;
    private moduleAddress: string;
    private moduleName: string;

    constructor(nodeUrl: string, moduleAddress: string) {
        this.client = new AptosClient(nodeUrl);
        this.moduleAddress = moduleAddress;
        this.moduleName = `${moduleAddress}::payment`;
    }

    async registerOrchestrator(account: AptosAccount, initialStake: number): Promise<string> {
        const payload: Types.TransactionPayload = {
            type: "entry_function_payload",
            function: `${this.moduleName}::register_orchestrator`,
            type_arguments: [],
            arguments: [initialStake.toString()]
        };

        const txnRequest = await this.client.generateTransaction(
            account.address(),
            payload,
            { max_gas_amount: "2000" }
        );

        const signedTxn = await this.client.signTransaction(account, txnRequest);
        const txnResult = await this.client.submitTransaction(signedTxn);
        await this.client.waitForTransaction(txnResult.hash);
        return txnResult.hash;
    }

    async createTask(
        account: AptosAccount,
        taskId: string,
        orchestrator: string,
        computeTimeMs: number,
        gpuResources: number,
        modelType: string,
        paymentAmount: number
    ): Promise<string> {
        const payload: Types.TransactionPayload = {
            type: "entry_function_payload",
            function: `${this.moduleName}::create_task`,
            type_arguments: [],
            arguments: [
                Buffer.from(taskId).toString("hex"),
                orchestrator,
                computeTimeMs.toString(),
                gpuResources.toString(),
                Buffer.from(modelType).toString("hex"),
                paymentAmount.toString()
            ]
        };

        const txnRequest = await this.client.generateTransaction(
            account.address(),
            payload,
            { max_gas_amount: "2000" }
        );

        const signedTxn = await this.client.signTransaction(account, txnRequest);
        const txnResult = await this.client.submitTransaction(signedTxn);
        await this.client.waitForTransaction(txnResult.hash);
        return txnResult.hash;
    }

    async completeTask(
        account: AptosAccount,
        taskId: string,
        resultHash: string
    ): Promise<string> {
        const payload: Types.TransactionPayload = {
            type: "entry_function_payload",
            function: `${this.moduleName}::complete_task`,
            type_arguments: [],
            arguments: [
                Buffer.from(taskId).toString("hex"),
                Buffer.from(resultHash).toString("hex")
            ]
        };

        const txnRequest = await this.client.generateTransaction(
            account.address(),
            payload,
            { max_gas_amount: "2000" }
        );

        const signedTxn = await this.client.signTransaction(account, txnRequest);
        const txnResult = await this.client.submitTransaction(signedTxn);
        await this.client.waitForTransaction(txnResult.hash);
        return txnResult.hash;
    }

    async disputeTask(account: AptosAccount, taskId: string): Promise<string> {
        const payload: Types.TransactionPayload = {
            type: "entry_function_payload",
            function: `${this.moduleName}::dispute_task`,
            type_arguments: [],
            arguments: [Buffer.from(taskId).toString("hex")]
        };

        const txnRequest = await this.client.generateTransaction(
            account.address(),
            payload,
            { max_gas_amount: "2000" }
        );

        const signedTxn = await this.client.signTransaction(account, txnRequest);
        const txnResult = await this.client.submitTransaction(signedTxn);
        await this.client.waitForTransaction(txnResult.hash);
        return txnResult.hash;
    }

    async getOrchestratorStats(address: string): Promise<OrchestratorStats> {
        const resource = await this.client.view({
            function: `${this.moduleName}::get_orchestrator_stats`,
            type_arguments: [],
            arguments: [address]
        });

        const [total_compute_time, successful_tasks, reputation_score, stake_amount] = resource as any[];
        return {
            total_compute_time: Number(total_compute_time),
            successful_tasks: Number(successful_tasks),
            reputation_score: Number(reputation_score),
            stake_amount: Number(stake_amount)
        };
    }

    async getTask(taskId: string): Promise<Task> {
        const resource = await this.client.view({
            function: `${this.moduleName}::get_task`,
            type_arguments: [],
            arguments: [Buffer.from(taskId).toString("hex")]
        });

        const [task_id, orchestrator, client, compute_time_ms, gpu_resources, model_type, result_hash, payment_amount, status, created_at, completed_at] = resource as any[];
        return {
            task_id: Buffer.from(task_id as string, 'hex').toString(),
            orchestrator: orchestrator as string,
            client: client as string,
            compute_time_ms: Number(compute_time_ms),
            gpu_resources: Number(gpu_resources),
            model_type: Buffer.from(model_type as string, 'hex').toString(),
            result_hash: Buffer.from(result_hash as string, 'hex').toString(),
            payment_amount: Number(payment_amount),
            status: Number(status),
            created_at: Number(created_at),
            completed_at: Number(completed_at)
        };
    }
} 