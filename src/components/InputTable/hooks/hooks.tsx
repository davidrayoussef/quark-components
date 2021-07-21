import React from 'react';

import { ColumnDef, Errors } from '../../../shared';
import {
  addEmptyRows,
  generateEmptyRow,
  generateEmptyTableData,
  handleFile,
  hasError,
  isEmptyRow,
  isNotIndexKey,
  isValid,
  processData,
  transformData
} from '../../../utilities';

export function useTableData({
  columnDefs,
  rowCount
}: {
  columnDefs: ColumnDef[];
  rowCount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): { [key: string]: any } {
  const [data, setData] = React.useState(
    generateEmptyTableData({ columnDefs, rowCount })
  );
  const [errors, setErrors] = React.useState(
    generateEmptyTableData({ columnDefs, rowCount })
  );

  function handleInputChange(rowIndex: number) {
    return (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target;
      setData(prevData => {
        const updatedData = prevData.slice();
        updatedData[rowIndex][name] = value;
        return updatedData;
      });
    };
  }

  function handleInputBlur({
    fieldName,
    index
  }: {
    fieldName: string;
    index: number;
  }) {
    return (event: React.FocusEvent<HTMLInputElement>): void => {
      setErrors(prevErrors => {
        const updatedErrors = prevErrors.slice();
        const { value: validation, message, required } = columnDefs.find(
          colDef => colDef.fieldName === fieldName
        ).validation;
        const fieldValue = event.target.value;
        if (required && fieldValue.length) {
          updatedErrors[index][fieldName] = isValid({ validation, fieldValue })
            ? undefined
            : message;
        }
        if (isEmptyRow(data[index])) {
          updatedErrors[index] = generateEmptyRow({ columnDefs, index });
        }
        return updatedErrors;
      });
    };
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      event.currentTarget.blur();
    }
  }

  function handleFileDrop(event: React.DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const { files } = event.dataTransfer;
    if (files?.length) {
      setErrors(generateEmptyTableData({ columnDefs, rowCount }));
      handleFile({ file: files[0], setData, columnDefs, rowCount });
    }
  }

  function handlePaste(event: React.ClipboardEvent): void {
    const text = event.clipboardData.getData('Text');
    if (/\S,\S/.test(text)) {
      event.preventDefault();
      setErrors(generateEmptyTableData({ columnDefs, rowCount }));
      const pastedData = processData({ csv: text, columnDefs });
      setData(addEmptyRows({ columnDefs, data: pastedData, rowCount }));
    }
  }

  function handleClear(): void {
    setData(generateEmptyTableData({ columnDefs, rowCount }));
    setErrors(generateEmptyTableData({ columnDefs, rowCount }));
  }

  function handleSubmitClick(callback: (data: unknown) => void): void {
    setErrors(prevErrors => {
      return prevErrors.map((errorRow: Errors, index: number) => {
        const dataRow = data[index];
        if (isEmptyRow(dataRow)) return generateEmptyRow({ columnDefs, index });
        return Object.keys(errorRow)
          .filter(isNotIndexKey)
          .reduce((obj: Errors, key) => {
            const { value: validation, message, required } = columnDefs.find(
              colDef => colDef.fieldName === key
            ).validation;
            if (required) {
              obj[key] = isValid({ validation, fieldValue: dataRow[key] })
                ? undefined
                : message;
            }
            return obj;
          }, {});
      });
    });
    if (hasError(errors)) return;
    const dataToPost = transformData({ data, columnDefs });
    if (dataToPost.length) {
      callback(dataToPost);
    }
  }

  return {
    data,
    errors,
    handleClear,
    handleFileDrop,
    handleInputBlur,
    handleInputChange,
    handleKeyPress,
    handlePaste,
    handleSubmitClick
  };
}
