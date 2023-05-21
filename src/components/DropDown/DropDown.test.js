import { render, screen, fireEvent} from '@testing-library/react'
import React from "react";
import { TripTypeContextProvider } from "../../context/TripTypeContext";
import DropDown from './DropDown';

describe("test DropDown component", () => {
    it("check initial label content", () => {
        render(<DropDown label={"One-way"}/>, {
            wrapper: TripTypeContextProvider
        })
        const SelectLabel = screen.getByTestId("SelectLabel");
        expect(SelectLabel).toHaveTextContent("One-way");
    })
    it("check initial checked option", () => {
        render(<DropDown label={"One-way"}/>, {
            wrapper: TripTypeContextProvider,
        });
        const InitialOption = screen.getByRole("InitialOption");
        expect(InitialOption).toHaveTextContent('✓', ' One-way');
    })
    it("check the number of options", () => {
        render(<DropDown label={"One-way"}/>, {
            wrapper: TripTypeContextProvider
        })
        expect(screen.getAllByTestId('Option').length).toBe(2)
    })
    it("check opening dropdown", () => {
        const setState = jest.fn();
        jest
            .spyOn(React, 'useState')
            .mockImplementationOnce(initState => [initState, setState]);
        render(<DropDown label={"One-way"}/>, {
            wrapper: TripTypeContextProvider,
        });
        const SelectLabel = screen.getByTestId("SelectLabel");
        fireEvent.click(SelectLabel);
        expect(setState).toBeTruthy();
    })

})