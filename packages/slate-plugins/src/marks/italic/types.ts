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
export interface ItalicNodeData {}
// Text node
export interface ItalicNode extends Text, ItalicNodeData {}

// renderLeaf options given as props
export interface ItalicRenderLeafPropsOptions {}

// Leaf props
export interface ItalicLeafProps
  extends RenderLeafProps,
    RenderNodePropsOptions,
    ItalicRenderLeafPropsOptions {
  leaf: ItalicNode;
}

export type ItalicKeyOption = 'italic';

// Plugin options
export type ItalicPluginOptionsValues = RenderNodeOptions &
  RootProps<ItalicRenderLeafPropsOptions> &
  Partial<GetOnHotkeyToggleMarkOptions> &
  Deserialize;
export type ItalicPluginOptionsKeys = keyof ItalicPluginOptionsValues;
export type ItalicPluginOptions<
  Value extends ItalicPluginOptionsKeys = ItalicPluginOptionsKeys
> = Partial<Record<ItalicKeyOption, Pick<ItalicPluginOptionsValues, Value>>>;

// renderLeaf options
export type ItalicRenderLeafOptionsKeys = ItalicPluginOptionsKeys;
export interface ItalicRenderLeafOptions
  extends ItalicPluginOptions<ItalicRenderLeafOptionsKeys> {}

// deserialize options
export interface ItalicDeserializeOptions
  extends ItalicPluginOptions<'type' | 'rootProps' | 'deserialize'> {}
