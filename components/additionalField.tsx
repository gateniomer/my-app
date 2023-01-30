import InputField from "./inputField";
import CustomButton from "./customButton";
import { AdditionalFieldType, AdditionalFieldTypes } from "../utils/types";
import Image from "next/image";

type Props = {
  field: AdditionalFieldType;
  last?: boolean;
  onAdd: () => void;
  onDel: (id: number) => void;
  onChange: (id: number, newField: AdditionalFieldType) => void;
};
export default function AdditionalField(props: Props) {
  const { field, last, onAdd, onDel, onChange } = props;

  return (
    <div key={field.id} className="flex gap-5 flex-wrap">
      <InputField
        label="Type"
        selected={field.type}
        options={AdditionalFieldTypes}
        onOptionChanged={(value) =>
          onChange(field.id, { ...field, type: value })
        }
      />
      <InputField
        required
        label="Link"
        onChange={(e) => {
          onChange(field.id, { ...field, link: e.target.value });
        }}
        value={field.link}
      />
      <CustomButton
        onClick={(e) => {
          e.preventDefault();
          onDel(field.id);
        }}
      >
        <Image
          src={process.env.NEXT_PUBLIC_GITHUB_PAGES + "/trash.png"}
          width={15}
          height={15}
          alt="add"
        />
      </CustomButton>
      {last && (
        <CustomButton
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onAdd();
          }}
        >
          <Image
            src={process.env.NEXT_PUBLIC_GITHUB_PAGES + "/add.png"}
            width={15}
            height={15}
            alt="add"
          />
        </CustomButton>
      )}
    </div>
  );
}
