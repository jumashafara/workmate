import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ConfusionMatrix from './ConfusionMatrix';

describe('ConfusionMatrix', () => {
    it('renders without crashing', () => {
        render(<ConfusionMatrix />);
        expect(screen.getByTestId('confusion-matrix')).toBeInTheDocument();
    });

    it('displays correct values', () => {
        const mockData = {
            truePositive: 10,
            falsePositive: 2,
            trueNegative: 8,
            falseNegative: 1,
        };
        render(<ConfusionMatrix data={mockData} />);
        expect(screen.getByText('True Positive: 10')).toBeInTheDocument();
        expect(screen.getByText('False Positive: 2')).toBeInTheDocument();
        expect(screen.getByText('True Negative: 8')).toBeInTheDocument();
        expect(screen.getByText('False Negative: 1')).toBeInTheDocument();
    });
});