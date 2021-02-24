import {
  Deserialize,
  GetOnHotkeyToggleMarkOptions,
  RenderNodeOptions,
  RenderNodePropsOptions,
  RootProps,
} from '@udecode/slate-plugins-common';
import { Text } from 'slate';
import { RenderLeafProps } from 'slate-react';

// Data of Text node
export interface UnderlineNodeData {}
// Text node
export interface UnderlineNode extends Text, UnderlineNodeData {}

// renderLeaf options given as props
export interface UnderlineRenderLeafPropsOptions {}

// Leaf props
export interface UnderlineLeafProps
  extends RenderLeafProps,
    RenderNodePropsOptions,
    UnderlineRenderLeafPropsOptions {
  leaf: UnderlineNode;
}

export type UnderlineKeyOption = 'underline';

// Plugin options
export type UnderlinePluginOptionsValues = RenderNodeOptions &
  RootProps<UnderlineRenderLeafPropsOptions> &
  Partial<GetOnHotkeyToggleMarkOptions> &
  Deserialize;
export type UnderlinePluginOptionsKeys = keyof UnderlinePluginOptionsValues;
export type UnderlinePluginOptions<
  Value extends UnderlinePluginOptionsKeys = UnderlinePluginOptionsKeys
> = Partial<
  Record<UnderlineKeyOption, Pick<UnderlinePluginOptionsValues, Value>>
>;

// renderLeaf options
export type UnderlineRenderLeafOptionsKeys = UnderlinePluginOptionsKeys;
export interface UnderlineRenderLeafOptions
  extends UnderlinePluginOptions<UnderlineRenderLeafOptionsKeys> {}

// deserialize options
export interface UnderlineDeserializeOptions
  extends UnderlinePluginOptions<'type' | 'rootProps' | 'deserialize'> {}
