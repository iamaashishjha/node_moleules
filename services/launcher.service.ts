import { Service, ServiceBroker, Context } from "moleculer";
import LauncherManager from "../managers/LauncherManager";

export default class Launcher extends Service {
	private launcher: LauncherManager = new LauncherManager();
    public constructor(public broker: ServiceBroker) {
		super(broker);
		this.parseServiceSchema({
			name: "launcher",
			created: async () => {
				this.logger.info("Initializing Launcher Service");
				await this.launcher
					.init()
					.catch((err: Error) =>
						console.log("ERROR EXECUTING INIT METHOD", err)
					);
			},

			settings: {

            },

			events: {
				
			},
			actions: {
				hello: {
					rest: {
						method: "GET",
						path: "/hello"
					},
					async handler() {
						return "Hello Moleculer From Launcher Service";
					}
				},
				
				"get-launcher-box-model-prefix": {
					rest: {
						method: "GET",
						path: "/"
					},
					async handler(ctx) {
						const data = Object.fromEntries(this.launcher.store.box_model_prefix);
						
						// Success response
						return {
							data,
							errors: null,
							message: "Request successful",
							statusCode: 200
						};
					}
				},
		
				"get-launcher-hotspots": {
					rest: {
						method: "GET",
						path: "/"
					},
					async handler(ctx) {
						const data = Object.fromEntries(this.launcher.store.hotspots);
						// Success response
						return {
							data,
							errors: null,
							message: "Request successful",
							statusCode: 200
						};
					}
				},
			},
		});
	}
}