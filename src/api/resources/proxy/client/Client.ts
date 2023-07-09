/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as Optimizely from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Proxy {
    interface Options {
        environment: core.Supplier<string>;
    }
}

export class Proxy {
    constructor(protected readonly options: Proxy.Options) {}

    /**
     * Proxy requests to Azure OpenAI REST API path /openai/{path},
     * see [Azure OpenAI API reference](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference).
     *
     * **Note:** The request is forwarded to a random backend, some deployments are not available in all backends.
     * @throws {@link Optimizely.UnprocessableEntityError}
     */
    public async azureOpenai(path: string, request: Record<string, unknown>): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), `api/raw/openai/${path}`),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/optimizely-browser",
                "X-Fern-SDK-Version": "0.0.7",
            },
            contentType: "application/json",
            body: await serializers.proxy.azureOpenai.Request.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Optimizely.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.OptimizelyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OptimizelyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.OptimizelyTimeoutError();
            case "unknown":
                throw new errors.OptimizelyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Proxy requests to Azure OpenAI REST API path /openai/{path},
     * see [Azure OpenAI API reference](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference).
     *
     * **Note:** The request is forwarded to a random backend, some deployments are not available in all backends.
     * @throws {@link Optimizely.UnprocessableEntityError}
     */
    public async openai(path: string, request: Record<string, unknown>): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), `api/raw/openai/${path}`),
            method: "PUT",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/optimizely-browser",
                "X-Fern-SDK-Version": "0.0.7",
            },
            contentType: "application/json",
            body: await serializers.proxy.openai.Request.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Optimizely.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.OptimizelyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OptimizelyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.OptimizelyTimeoutError();
            case "unknown":
                throw new errors.OptimizelyError({
                    message: _response.error.errorMessage,
                });
        }
    }
}