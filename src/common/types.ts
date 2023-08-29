import {
  COMPONENT_POSITIONS,
  COMPONENT_SHAPES,
  COMPONENT_SIZES,
  COMPONENT_STATUSES,
  COMPONENT_VARIANTS
} from './constants';

export type ComponentVariant = (typeof COMPONENT_VARIANTS)[number];
export type ComponentPosition = (typeof COMPONENT_POSITIONS)[number];
export type ComponentShape = (typeof COMPONENT_SHAPES)[number];
export type ComponentSize = (typeof COMPONENT_SIZES)[number];
export type ComponentStatus = (typeof COMPONENT_STATUSES)[number];
