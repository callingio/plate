import { setDefaults } from '../../common';
import { DEFAULTS_CODE_BLOCK } from './defaults';
import { getListItemEntry } from '../list';
import { getCodeBlockLineEntry } from './queries/getCodeBlockLineEntry';
import { ReactEditor } from 'slate-react';
import { WithCodeBlockOptions } from './types';

export const withCodeBlock = ({
  validCodeBlockChildrenTypes,
  ...options
}): WithCodeBlockOptions = {}) => <T extends ReactEditor>(editor: T) => {
  const {code_block, code_block_line} = setDefaults(options, DEFAULTS_CODE_BLOCK);
  const {insertBreak} = editor;

  editor.insertBreak = () => {
    if (!editor.selection) return;
    const res = getCodeBlockLineEntry(editor, {}, options);

    // fixme: :move code from onKeyDownCodeBlock to here
  }
}