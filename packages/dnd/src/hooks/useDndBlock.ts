import { useState } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { useEditorRef } from '@udecode/plate-core';
import { useDragBlock } from './useDragBlock';
import { useDropBlockOnEditor } from './useDropBlockOnEditor';

export const useDndBlock = ({
  id,
  blockRef,
  removePreview,
}: {
  id: string;
  blockRef: any;
  removePreview?: boolean;
}) => {
  const editor = useEditorRef();

  const [dropLine, setDropLine] = useState<'' | 'top' | 'bottom'>('');

  const [{ isDragging }, dragRef, preview] = useDragBlock(editor, id);
  const [{ isOver, isOverCurrent }, drop] = useDropBlockOnEditor(editor, {
    id,
    blockRef,
    dropLine,
    setDropLine,
  });

  // TODO: previewElement option
  if (removePreview) {
    drop(blockRef);
    preview(getEmptyImage(), { captureDraggingState: true });
  } else {
    preview(drop(blockRef));
  }

  if (!isOverCurrent && dropLine) {
    setDropLine('');
  }

  return {
    isDragging,
    dropLine,
    dragRef,
  };
};
