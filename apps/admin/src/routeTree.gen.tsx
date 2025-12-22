import {
	Outlet,
	createRootRouteWithContext,
	createRoute,
} from "@tanstack/react-router";
import { App } from "./routes/index";

const rootRoute = createRootRouteWithContext()({
	component: () => <Outlet />,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: App,
});

export const routeTree = rootRoute.addChildren([indexRoute]);
