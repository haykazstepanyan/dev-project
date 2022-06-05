import React from "react";
import Button from "../components/button/Button";

export default function ButtonComponent() {
    return (
        <div>
            <div style={{ marginTop: "10px" }}>
                <Button
                    value="discover now"
                    shape="rounded"
                    size="lg"
                    type="primary"
                />
            </div>
            <div style={{ marginTop: "10px" }}>
                <Button
                    value="discover now"
                    shape="rounded"
                    size="sm"
                    type="primary"
                />
            </div>
            <div style={{ marginTop: "10px" }}>
                <Button
                    value="discover now"
                    shape="square"
                    size="sm"
                    type="secondary"
                />
            </div>
            <div style={{ marginTop: "10px" }}>
                <Button
                    value="discover now"
                    shape="square"
                    size="lg"
                    type="secondary"
                />
            </div>
        </div>
    );
}
