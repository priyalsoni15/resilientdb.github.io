import { defineStore } from "pinia";
import { getAvailableBlocks } from "@/api/blocks_endpoint";
import { useEndpointsStore } from "@/store/endpoints";

interface Block {
	id: number;
	number: string;
	transactions: {
		cmd: string;
		key?: string;
		value?: string;
		min_key?: string;
		max_key?: string;

	}[];
	size: number;
	createdAt: string;
}
interface BlocksState {
	blocks: Block[];
}

interface Ledger {
	replicaNum: number;
	clientNum: number;
	workerNum: number;
	clientBatchNum: number;
	maxProcessTxn: number;
	clientBatchWaitTime: number;
	inputWorkerNum: number;
	outputWorkerNum: number;
	clientTimeoutMs: number;
	minDataReceiveNum: number;
	maxMaliciousReplicaNum: number;
	checkpointWaterMark: number;
}

interface LedgerState {
	ledger: Ledger[];
}

export const useBlocksStore = defineStore("blocks", {
	state: () => {
		const state: BlocksState = {
			blocks: [],
		};
		return state;
	},

	actions: {
		async refreshBlocks() {
			const endpointsStore = useEndpointsStore();
			if (!endpointsStore.endpoints[0]) {
				throw new Error("No Endpoints Found.");
			}
      console.log("refresh block",endpointsStore.endpoints[0])
			this.blocks = await getAvailableBlocks(endpointsStore.endpoints[0]);
		},
	},
});

export const useLedgerStore = defineStore("ledger", {
	state: () => {
		const state: LedgerState = {
			ledger: [],
		};
		return state;
	},

	actions: {
		async populateTable() {
			const endpointsStore = useEndpointsStore();
			if (!endpointsStore.endpoints[1]) {
				throw new Error("No Endpoints Found.");
			}
		
			this.ledger = await getAvailableBlocks(endpointsStore.endpoints[1]);
		},
	},
});


export const initialize = function () {
};
