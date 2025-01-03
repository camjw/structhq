export enum StreamEventType {}

type BaseStreamEvent = {
  event: StreamEventType;
};

export type StreamEvent = void;
